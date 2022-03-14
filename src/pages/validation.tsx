import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
};

const validation: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    mode: "onChange",
    defaultValues: { name: "aaa", email: "t@test.com" },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // handleSubmit submitした値がdataにオブジェクトの形で入る
    console.log(data);
    reset();
  };

  //**  Watch */
  const watchName = watch("name", "");
  // nameの値が入る
  console.log(watchName);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} />
        <input
          {...register("email", {
            required: true,
            maxLength: 10,
            pattern: {
              value: /^[0-9]+$/,
              message: "整数で入力してください",
            },
          })}
        />
        <button type="submit">Submit</button>
        <div>{errors?.email?.message}</div>
        {errors?.email?.type === "maxLength" && <p>10文字超えました</p>}
      </form>
    </>
  );
};

export default validation;
