const CLOUDFLARE_ID = import.meta.env.VITE_CLOUDFLARE_ACCOUNT_ID;
const CLOUDFLARE_TOKEN = import.meta.env.VITE_CLOUDFLARE_TOKEN;
const CLOUDFLARE_ACCOUNT_HASH = import.meta.env.VITE_CLOUDFLARE_ACCOUNT_HASH;

export const getUploadUrl = async () => {
  const response = await (
    await fetch(`/api/accounts/${CLOUDFLARE_ID}/images/v2/direct_upload`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${CLOUDFLARE_TOKEN}`,
      },
    })
  ).json();

  return response;
};

export const uploadImageCloudflare = async (file: File, uploadUrl: string) => {
  const cloudflareImageUrl = `/image/${CLOUDFLARE_ACCOUNT_HASH}/${uploadUrl}`;

  const cloudflareForm = new FormData();
  cloudflareForm.append('file', file);

  const response = await fetch(cloudflareImageUrl, {
    method: 'POST',
    body: cloudflareForm,
  });

  if (!response.ok) {
    alert('Cloudflare: 이미지 업로드 실패했습니다.');
  }

  return response;
};

export const checkUploadStatus = async (uploadId: string) => {
  const response = await (
    await fetch(`/api/accounts/${CLOUDFLARE_ID}/images/v1/${uploadId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${CLOUDFLARE_TOKEN}`,
      },
    })
  ).json();

  return response;
};
