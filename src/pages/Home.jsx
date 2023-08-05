import { styled } from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";
import ValidMsg from "../components/ui/ValidMsg";
import Button from "../components/ui/Button";
const Container = styled.div``;
const H1 = styled.h1`
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Label = styled.label`
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  font-weight: 600;
`;
const Input = styled.input`
  margin-bottom: 1rem;
`;

function Home() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Username is required")
        .min(6, "Username must be at least 6 characters long"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters long"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Container>
      <H1>Prisijungti</H1>

      <Form onSubmit={formik.handleSubmit}>
        <Label htmlFor="username">Vartotojo vardas</Label>
        <Input
          type="text"
          name="username"
          id="username"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
        />
        {formik.touched.username && formik.errors.username && (
          <ValidMsg text={formik.errors.username} />
        )}

        <Label htmlFor="password">Slaptažodis</Label>
        <Input
          type="password"
          name="password"
          id="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <ValidMsg text={formik.errors.password} />
        )}

        <Button name="Prisijungti" />
      </Form>
    </Container>
  );
}

export default Home;
