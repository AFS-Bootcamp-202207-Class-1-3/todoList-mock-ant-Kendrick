import { Button, Modal } from "antd";
import React, { useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import { Input } from 'antd';


function AntModal(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { todo } = props;

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <a key="list-loadmore-edit" onClick={showModal}>
        <EditOutlined /> edit 
      </a>
      <Modal
        title="修改TODO"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={"修改"}
        cancelText={"算了算了"}
      >
        <Input placeholder="Basic usage" value={todo.context}/>
        
      </Modal>
    </>
  );
}

export default AntModal;
