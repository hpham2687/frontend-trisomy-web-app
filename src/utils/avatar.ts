import config from '@/config';

export const getAvatarURL = (currentUserAvatar?: string) => {
  if (currentUserAvatar) {
    return `${config.apiUrl}/users/avatars/` + currentUserAvatar;
  }
  return '';
};
