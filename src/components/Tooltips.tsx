import { Tooltip, Button } from "@nextui-org/react";

export default function Tooltips() {
  return (
    <Tooltip color="primary" content="I am a tooltip">
      <Button color="danger">Hover me</Button>
    </Tooltip>
  );
}
