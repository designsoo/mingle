import axios from 'axios';

const CLOUDFLARE_ID = import.meta.env.VITE_CLOUDFLARE_ACCOUNT_ID;
const CLOUDFLARE_TOKEN = import.meta.env.VITE_CLOUDFLARE_TOKEN;
const CLOUDFLARE_ACCOUNT_HASH = import.meta.env.VITE_CLOUDFLARE_ACCOUNT_HASH;

export const getUploadUrl = async () => {
  try {
    const response = await axios.post(`/api/accounts/${CLOUDFLARE_ID}/images/v2/direct_upload`, null, {
      headers: {
        Authorization: `Bearer ${CLOUDFLARE_TOKEN}`,
      },
    });

    if (!response.data.success) {
      console.error('Cloudflare: URL 가져오기 실패했습니다.');
      alert('Cloudflare: URL 가져오기 실패했습니다.');
      return response.data;
    }

    return response.data.result.id;
  } catch (error) {
    console.error('Error fetching upload URL:', error);
    alert('업로드 URL을 받아오는데 실패했습니다.');
  }
};

export const uploadImageCloudflare = async (file: File, uploadId: string) => {
  const cloudflareImageUrl = `/image/${CLOUDFLARE_ACCOUNT_HASH}/${uploadId}`;

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
