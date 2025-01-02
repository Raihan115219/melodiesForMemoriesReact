/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

const MultiStepModal = ({
  steps,
  nextLabel = "Next",
  previousLabel = "Previous",
  finishLabel = "Finish",
  onFinish,
  isOpen,
  onClose,
}) => {
  const [step, setStep] = useState(0);
  const isLastStep = step === steps.length - 1;
  const isFirstStep = step === 0;
  const handleFinish = () => {
    if (onFinish) {
      onFinish();
    }
    onClose();
    setStep(0);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className=" max-w-4xl ">
        <DialogHeader>
          <DialogTitle className="text-center underline text-2xl font-bold">
            {steps[step].props.title}
          </DialogTitle>
        </DialogHeader>
        <div className="my-4 h-[500px]">{steps[step]}</div>
        <DialogFooter>
          {!isFirstStep && (
            <Button
              onClick={() => setStep((prev) => prev - 1)}
              className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              {previousLabel}
            </Button>
          )}
          {!isLastStep ? (
            <Button
              onClick={() => setStep((prev) => prev + 1)}
              className="px-4 py-2 text-white  rounded-md"
            >
              {nextLabel}
            </Button>
          ) : (
            <Button onClick={handleFinish}>{finishLabel}</Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MultiStepModal;
