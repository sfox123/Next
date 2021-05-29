import React, { useEffect } from "react";
import keys from "../api/admin.json";
import { useRouter } from "next/router";

const Admin = ({ userIn }) => {
  const router = useRouter();

  useEffect(() => {
    !userIn ? router.push("/illegalEntry") : null;
  }, []);

  return <div>ADMIN</div>;
};
Admin.getInitialProps = async ({ query }) => {
  try {
    const { token } = keys;
    const id = query.id;
    const splitID = id.split(".")[0];
    const user = token.includes(splitID);
  } catch (error) {
    return <h1>404 - Page Not Found</h1>;
  }
  return {
    userIn: user,
  };
};
export default Admin;
