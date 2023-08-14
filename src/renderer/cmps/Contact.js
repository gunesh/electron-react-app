import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  name: Yup.string().required("name is required"),
  phone: Yup.string().required("Phone number is required"),
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  requirment: Yup.string()
    .min(20, "Requirment must be 20 characters at minimum")
    .required("Requirment is required"),
});

class App extends React.Component {
  render() {
    return (
      <Formik
      initialValues={{
        name: "",
        phone: "",
        email: "",
        requirment: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        fetch("https://greencontie.com/api/connect.php", {
          method: "POST",
          body: JSON.stringify({
            name: values.name,
            phone: values.phone,
            email: values.email,
            query: values.requirment,
            type: "CONTACT",
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });

        resetForm({ values: "" });
      }}
    >
      {({ touched, errors, isSubmitting, values }) =>
        !isSubmitting ? (
          <div>
            <Form>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
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

              <div className="form-group">
                <label htmlFor="email">Phone *</label>
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

              <div className="form-group">
                <label htmlFor="email">Email *</label>
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

              <div className="form-group">
                <label htmlFor="requirment" className="mt-3">
                  Requirement *
                </label>
                <Field
                  type="textarea"
                  name="requirment"
                  placeholder="Enter requirment"
                  cols={40}
                  rows={20}
                  className={`mt-2 form-control
        ${touched.requirment && errors.requirment ? "is-invalid" : ""}`}
                />
                <ErrorMessage
                  component="div"
                  name="requirment"
                  className="invalid-feedback"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-block mt-4"
              >
                Submit
              </button>
            </Form>
          </div>
        ) : (
          <div>
            <h1 className="p-3 mt-5">Form Submitted</h1>

            <div className="alert alert-success mt-3">
              Thank for your connecting with us. Here's what we got from
              you !
            </div>
            <ul className="list-group">
              <li className="list-group-item">Name: {values.name}</li>
            </ul>
          </div>
        )
      }
    </Formik>
    );
  }
}

export default App;
