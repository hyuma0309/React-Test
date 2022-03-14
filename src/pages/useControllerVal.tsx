import React,{ FC } from 'react';
import { TextField } from '@material-ui/core';
import { useForm, useController, Control } from 'react-hook-form';

type Props = {
  control: Control<Record<string, any>>;
  name: string;
  rules: any;
};

// material-uiなど他のUIライブラリと一緒に使いたい場合はuseControllerを使う
const Input: FC<Props> = ({ control, name, rules }) => {
  const { field, fieldState } = useController({ control, name, rules });
  return (
    <>
      <TextField {...field} />
      <p>{fieldState.isTouched && 'Touched'}</p>
      <p>{fieldState.isDirty && 'Dirty'}</p>
      <p>{fieldState.invalid ? 'invalid' : 'valid'}</p>
    </>
  );
};

export default function useControllerVal() {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      firstName: '',
    },
  });
  const onSubmit = (data: { firstName: string }) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input control={control} name="firstName" />
      <button type="submit">PUSH</button>
    </form>
  );
}
