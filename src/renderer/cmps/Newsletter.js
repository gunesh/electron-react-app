import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  name: Yup.string().required("name is required"),
  phone: Yup.string().required("Phone number is required"),
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
});

class App extends React.Component {
  render() {
    return (
      <Formik
        initialValues={{
          name: "",
          phone: "",
          email: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values, { resetForm }) => {
          

          fetch("https://greencontie.com/api/connect.php", {
            method: "POST",
            body: JSON.stringify({
              name: values.name,
              phone: values.phone,
              email: values.email,
              query: "",
              type: "NEWS",
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          });

          resetForm({ values: "" });
        }}
      >
        {({ touched, errors, isSubmitting, values, resetForm }) => (
          <div>
            <Form className="form-inline">
              <div className="form-check form-check-inline">
                <Field
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  autoComplete="off"
                  className={`mt-2 form-control
   ${touched.name && errors.name ? "is-invalid" : ""}`}
                />

                <ErrorMessage
                  component="div"
                  name="name"
                  className="invalid-feedback"
                />
              </div>

              <div className="form-check form-check-inline">
                <Field
                  type="phone"
                  name="phone"
                  placeholder="Enter phone number"
                  autoComplete="off"
                  className={`mt-2 form-control
   ${touched.phone && errors.phone ? "is-invalid" : ""}`}
                />

                <ErrorMessage
                  component="div"
                  name="phone"
                  className="invalid-feedback"
                />
              </div>

              <div className="form-check form-check-inline">
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  autoComplete="off"
                  className={`mt-2 form-control
   ${touched.email && errors.email ? "is-invalid" : ""}`}
                />

                <ErrorMessage
                  component="div"
                  name="email"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-check form-check-inline">
                <button
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                >
                  Sign-up for Newsletter
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    );
  }
}

export default App;
