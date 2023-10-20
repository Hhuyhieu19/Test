import React from "react";
import { FC } from "react";
import { Box, Input, Page } from "zmp-ui";

const UserPage: FC = () => {
    return (
        <Page className="section-container">
            <Input label="Label" helperText="Helper text" />
        </Page>
    );
};

export default UserPage;