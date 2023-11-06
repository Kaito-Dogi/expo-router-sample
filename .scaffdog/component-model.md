---
name: "component-model"
root: "src/components/model/"
output: "./"
ignore: []
questions:
  model:
    message: "Please select a model."
    choices:
      - event
      - ticket
  name: "Please enter a component name."
---

# `{{ inputs.model | camel }}/{{ inputs.model | pascal }}{{ inputs.name | pascal }}/{{ inputs.model | pascal }}{{ inputs.name | pascal }}.tsx`

```tsx
import { FC } from "react";
import { View } from "react-native";

import { styles } from "./styles";

type Props = {};

/**
 * @package
 */
export const {{ inputs.model | pascal }}{{ inputs.name | pascal }}: FC<Props> = ({}) => {
  return <View style={styles.container} />;
};
```

# `{{ inputs.model | camel }}/{{ inputs.model | pascal }}{{ inputs.name | pascal }}/styles.ts`

```tsx
import { StyleSheet } from "react-native";

/**
 * @package
 */
export const styles = StyleSheet.create({
  container: {},
});
```

# `{{ inputs.model | camel }}/{{ inputs.model | pascal }}{{ inputs.name | pascal }}/index.ts`

```typescript
export { {{ inputs.model | pascal }}{{ inputs.name | pascal }} } from "./{{ inputs.model | pascal }}{{ inputs.name | pascal }}";
```
