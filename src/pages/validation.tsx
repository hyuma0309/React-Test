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
    // 初期値
    // defaultValues: { name: "aaa", email: "t@test.com" },
  });

  const nTest = /\n/;
  const ngTest = /\n/g;
  const text = "改行します\f 改行ですよー\f 本当に改行ですよ"
  console.log(text)
  console.log(text.match(/改行/))
  console.log(text.match(/改行/g))


  const a = /b.+e/;
  const text2 = "Abcde cdef"
  const text3 = "Abcde bdef"
  console.log(text3.match(a));

  console.log("a".match(/\./));

  const b = /i?Phone/;
  console.log(b.test("Phone"));

  const c = /go?gle/
  console.log(c.test("goggggle"));

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
        <input
          {...register("name", {
            // pattern: {
            //   value: /^\D+$/,
            //   message: "数字",
            // },
            // pattern: {
            //   value: /[ABC]/,
            //   message: "ABCだけ入れろ",
            // },
            // pattern: {
            //   value: /[^ABC]/,
            //   message: "ABCいずれかのみ入れるのはダメ",
            // },
          })}
        />
        <input
          {...register("email", {
            required: true,
            maxLength: 10,
            pattern: {
              // valueの値のみ受け付ける
              value: /^[0-9]+$/,
              message: "整数で入力してください",
            },
          })}
        />
        <button type="submit">Submit</button>
        <div>{errors?.name?.message}</div>
        <div>{errors?.email?.message}</div>
        {errors?.email?.type === "maxLength" && <p>10文字超えました</p>}
      </form>
    </>
  );
};

export default validation;
