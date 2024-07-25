import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { DocLoginSchema } from "../../validationsSchemas/DocValidation";

const DocLoginPage = () => {
  return (
    <>
      <div className="shadow-xl">
        <nav className="max-w-[1240px] m-auto px-7">
          <div className="flex justify-center p-7">
            <h1 className="text-5xl font-bold text-blue-700 ">DocLab.</h1>
          </div>
        </nav>
      </div>

      <div className="rounded-2xl mt-20 py-32 border border-white m-auto max-w-[640px] shadow-xl">
        <h2 className="font-bold text-center text-3xl text-blue-700 mb-10">Doctor Login</h2>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={DocLoginSchema}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className="flex flex-col items-center ">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Email:</span>
                </div>
                <Field
                  name="email"
                  type="email"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <ErrorMessage
                name="email"
                component="span"
                className="text-error mt-1"
              />

              <label className="form-control mt-2 w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Password:</span>
                </div>
                <Field
                  name="password"
                  type="password"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <ErrorMessage
                name="password"
                component="span"
                className="text-error mt-1"
              />

              <div className="mt-10 w-full max-w-xs">
                <button className="btn btn-block btn-primary">Login</button>
              </div>

              <div className="mt-4 w-full max-w-xs">
                Do not yet have an account?
                <a href="" className="pl-1 text-primary">
                  Register
                </a>
              </div>
            </Form>
          )}
        </Formik>

        {/* <form action="" className="flex flex-col items-center ">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Email:</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>

            <label className="form-control w-full max-w-xs mt-5">
              <div className="label">
                <span className="label-text">Password:</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>

            <div className="mt-10 w-full max-w-xs">
              <button className="btn btn-block btn-primary">Login</button>
            </div>

            <div className="mt-4 w-full max-w-xs">
              Do not yet have an account?{" "}
              <a href="" className="pl-1 text-primary">
                Register
              </a>
            </div>
          </form> */}
      </div>
    </>
  );
};

export default DocLoginPage;
