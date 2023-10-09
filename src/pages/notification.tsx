import React, { FC, useState } from "react";
import { ListRenderer } from "components/list-renderer";
import { useRecoilValue } from "recoil";
import { notificationsState } from "state";
import { Box, Header, Modal, Page, Text } from "zmp-ui";
import { Divider } from "components/divider";
import { Notification } from "types/notification";

const NotificationList: FC = () => {
  const notifications = useRecoilValue(notificationsState);

  const [modalVisible, setModalVisible] = useState(false);
  const [currentNotification, setCurrentNotification] = useState<Notification | null>(null);


  const openModal = (notification) => {
    setCurrentNotification(notification);
    setModalVisible(true);
  };

  const closeModal = () => {
    setCurrentNotification(null);
    setModalVisible(false);
  };

  return (
    <Box className="bg-background">
      <ListRenderer
        noDivider
        items={notifications}
        renderLeft={(item) => (
          <img className="w-10 h-10 rounded-full" src={item.image} />
        )}
        renderRight={(item) => (
          <Box key={item.id} onClick={() => openModal(item)}>
            <Text.Header>{item.title}</Text.Header>
            <Text
              size="small"
              className="text-gray overflow-hidden whitespace-nowrap text-ellipsis"
            >
              {item.content}
            </Text>
          </Box>
        )}
      />

      <Modal
        visible={modalVisible}
        title={currentNotification?.title}
        coverSrc= "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/358683377_252027390909635_4768424488306902632_n.png?_nc_cat=106&ccb=1-7&_nc_sid=52f669&_nc_ohc=HVEAch1dmf8AX_1J7kT&_nc_ht=scontent.fsgn5-14.fna&cb_e2o_trans=q&oh=00_AfCnOOonVkkmFSu9nslW8JnPD7yMynJhSL1Tz4IwogxI4A&oe=65232052"
        onClose={closeModal}
        zIndex={1200}
        actions={[
          {
            text: "Đóng",
            close: true,
            highLight: true,
          },
        ]}
        description={currentNotification?.content}
      />
    </Box>
  );
};

const NotificationPage: FC = () => {
  return (
    <Page>
      <Header title="Thông báo" showBackIcon={false} />
      <Divider />
      <NotificationList />
    </Page>
  );
};

export default NotificationPage;
