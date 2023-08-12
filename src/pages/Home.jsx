import { styled } from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";
import ValidMsg from "../components/ui/ValidMsg";
import Button from "../components/ui/Button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

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
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email is required")
        .min(6, "Email must be at least 6 characters long")
        .email("Email is not valid"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters long"),
    }),
    onSubmit: (values) => {
      login(values.email, values.password);
    },
  });
  const navigate = useNavigate();
  function login(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        // ...
        navigate("/main");
        console.log(userCredential);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
  return (
    <Container>
      <H1>Prisijungti</H1>

      <Form onSubmit={formik.handleSubmit}>
        <Label htmlFor="email">El paštas</Label>
        <Input
          type="email"
          name="email"
          id="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <ValidMsg text={formik.errors.email} />
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
