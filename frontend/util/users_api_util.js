export const updateUser = user => {

  return  $.ajax({
    method: "PATCH",
    url: "/api/users",
    contentType: false,
    processData: false,
    data: user
  });
};
