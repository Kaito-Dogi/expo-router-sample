---
name: "icon"
root: "src/components/icons/"
output: "./"
ignore: []
questions:
  sets: "Please enter a icon sets."
  name: "Please enter a icon name."
---

# `{{ inputs.name | pascal }}Icon.tsx`

```tsx
import { {{ inputs.sets | pascal }} } from "@expo/vector-icons";
import { FC } from "react";

type Props = {
  color?: string;
  outline?: boolean;
};

export const {{ inputs.name | pascal }}Icon: FC<Props> = ({ color, outline = false }) => {
  return outline ? (
    <{{ inputs.sets | pascal }} name="" color={color} size={24} />
  ) : (
    <{{ inputs.sets | pascal }} name="" color={color} size={24} />
  );
};
```
