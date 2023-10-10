import React, { FC, useState } from "react";
import { ListRenderer } from "components/list-renderer";
import { useRecoilValue } from "recoil";
import { notificationsState } from "state";
import { Box, Header, Modal, Page, Text } from "zmp-ui";
import { Divider } from "components/divider";
import { Notification } from "types/notification";
import  img_modal from "static/banner_modal.jpg";

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
        coverSrc={img_modal}
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
