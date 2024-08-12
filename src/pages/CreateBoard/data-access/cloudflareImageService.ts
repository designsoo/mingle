const CLOUDFLARE_ID = import.meta.env.VITE_CLOUDFLARE_ACCOUNT_ID;
const CLOUDFLARE_TOKEN = import.meta.env.VITE_CLOUDFLARE_TOKEN;
const CLOUDFLARE_ACCOUNT_HASH = import.meta.env.VITE_CLOUDFLARE_ACCOUNT_HASH;
const CLOUDFLARE_WORKER_URL = import.meta.env.VITE_CLOUDFLARE_WORKER_URL;

const isDevelopment = import.meta.env.DEV;
const API_BASE_URL = isDevelopment ? '' : CLOUDFLARE_WORKER_URL;

export const getUploadUrl = async () => {
  const oneDirectUrl = `${API_BASE_URL}/api/accounts/${CLOUDFLARE_ID}/images/v2/direct_upload`;

  try {
    const response = await (
      await fetch(oneDirectUrl, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${CLOUDFLARE_TOKEN}`,
        },
      })
    ).json();

    if (!response.success) {
      console.error('Cloudflare: URL 가져오기 실패했습니다.');
      alert('Cloudflare: URL 가져오기 실패했습니다.');
    }

    return response.result.id;
  } catch (error) {
    console.error('Error fetching upload URL: ', error);
    alert('업로드 URL을 받아오는데 실패했습니다.');
  }
};

export const uploadImageCloudflare = async (file: File, uploadId: string) => {
  const cloudflareImageUrl = `${API_BASE_URL}/image/${CLOUDFLARE_ACCOUNT_HASH}/${uploadId}`;

  const cloudflareForm = new FormData();
  cloudflareForm.append('file', file);

  try {
    const response = await fetch(cloudflareImageUrl, {
      method: 'POST',
      body: cloudflareForm,
    });

    if (!response.ok) {
      alert('Cloudflare: 이미지 업로드 실패했습니다.');
    }

    return response;
  } catch (error) {
    console.error('Error uploading image: ', error);
    alert('이미지 업로드 중 오류가 발생했습니다.');
  }
};

export const checkUploadStatus = async (uploadId: string) => {
  try {
    const response = await (
      await fetch(`${API_BASE_URL}/api/accounts/${CLOUDFLARE_ID}/images/v1/${uploadId}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${CLOUDFLARE_TOKEN}`,
        },
      })
    ).json();

    return response;
  } catch (error) {
    console.error('Error checking upload status: ', error);
    alert('이미지 업로드 상태 확인 중 오류가 발생했습니다.');
  }
};
