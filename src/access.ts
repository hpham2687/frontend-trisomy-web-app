/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: { currentUser?: API.CurrentUser } | undefined) {
  const { currentUser } = initialState ?? {};
  console.log({
    canAdmin: currentUser && currentUser.isAdmin,
  });

  return {
    canAdmin: () => currentUser?.isAdmin,
  };
}
