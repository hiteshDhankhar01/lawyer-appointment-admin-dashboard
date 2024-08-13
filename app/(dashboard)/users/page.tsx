import { Separator } from "@radix-ui/react-separator";
import React from "react";

const User: React.FC = () => {
    return (
        <div className="px-10 py-5">
            <p className="text-xl ">Users</p>
            <Separator className="bg-gray-800" />
            {/* <DataTable /> */}
        </div>
    )
}

export default User;