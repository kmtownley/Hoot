export const updateUser = user => (
  $.ajax({
    method: "PATCH",
    url: "/api/users",
    data: { user }
  })
);
