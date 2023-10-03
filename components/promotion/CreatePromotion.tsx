import { Form, Input, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
 interface PromotionProps {
  promotion: boolean;
  setCreatePromotion: (value: boolean) => void;
  form: any; 
}
const CreatePromotion:React.FC<PromotionProps> = ({ promotion, setCreatePromotion, form }) => {
  return (
    <Modal
      open={promotion}
      onCancel={() => setCreatePromotion(false)}
      footer={null}
      centered={true}
    >
      <div>
        <div className="text-center">
          <h1 className="text-blue-500 text-2xl font-bold mb-3">
            Create Promotion{" "}
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            temporibus iste explicabo commodi! Quod cumque numquam nobis
            laborum, error eligendi.
          </p>
        </div>
        <Form layout="vertical" form={form}>
          <div className="w-full mb-3 flex flex-col items-start justify-start gap-[0.2rem]">
            <label
              htmlFor="Title"
              className="text-[#181336] text-[13px] font-[600]"
            >
              Title{" "}
            </label>
            <Input
              className="w-full authInput"
              placeholder="This is a placeholder"
              id="title"
            />
          </div>
          <div className="w-full mb-3 flex flex-col items-start justify-start gap-[0.2rem]">
            <label
              htmlFor="amount"
              className="text-[#181336] text-[13px] font-[600]"
            >
              Amount{" "}
            </label>
            <Input
              className="w-full authInput"
              placeholder="This is a placeholder"
              id="amount"
            />
          </div>
          <div className="w-full mb-3 flex flex-col items-start justify-start gap-[0.2rem]">
            <label
              htmlFor="description"
              className="text-[#181336] text-[13px] font-[600]"
            >
              Vendors Name{" "}
            </label>
            <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} />
          </div>
          <div className="w-full mb-3 flex flex-col items-start justify-start gap-[0.2rem]">
            <label
              htmlFor="condition"
              className="text-[#181336] text-[13px] font-[600]"
            >
              Condition{" "}
            </label>
            <Input
              className="w-full authInput"
              placeholder="This is a placeholder"
              id="condition"
            />
          </div>
          <button className="btn w-full bg-blue-500 hover:bg-blue-500/70 text-white capitalize">
            Create Promotion
          </button>
        </Form>
      </div>
    </Modal>
  );
};

export default CreatePromotion;
