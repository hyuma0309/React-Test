import { useForm, SubmitHandler } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

type Inputs = {
  name: string;
  email: string;
};

export const Demo = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} />
      <input
        {...register('email', {
          required: true,
          maxLength: 60,
          pattern: {
            value:
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: 'メールアドレスの形式が不正です',
          },
        })}
      />
      <ErrorMessage errors={errors} name="email" />
      <button type="submit">Submit</button>
    </form>
  );
};
