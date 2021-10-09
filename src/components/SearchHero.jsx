import React, { useState } from "react";
import Axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Header from "./Header";
import Results from "./Results";
import "../styles/card.scss";

function SearchHero() {
  const [heroe, setHeroe] = useState([]);
  const [succes, setSuccess] = useState(false);

  async function getHeroData(hero) {
    try {
      const response = await Axios.get(
        `https://superheroapi.com/api/4769568433087831/search/${hero.heroName}`
      );
      setHeroe(response);
      response.data.response === "success"
        ? setSuccess(true)
        : setSuccess(false);
    } catch (err) {
      alert(err);
    }
  }

  return (
    <>
      <Header></Header>
      <Formik
        initialValues={{
          heroName: "",
        }}
        validate={(data) => {
          let err = {};
          if (!data.heroName) {
            err.heroName = "enter the name of a superhero";
          }
          return err;
        }}
        onSubmit={(data, { resetForm }) => {
          resetForm();
          getHeroData(data);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <div className="container">
            <div className="row justify-content-center mt-5">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="card shadow">
                  <div className="card-body">
                    <Form>
                      <div className="mb-4">
                        <label className="form-label">Heroes Search</label>
                        <Field
                          type="text"
                          className="form-control"
                          id="heroOfName"
                          name="heroName"
                          placeholder="Batman"
                          autoComplete="on"
                        />
                        <ErrorMessage
                          name="heroName"
                          component={() => (
                            <div className="error"> {errors.heroName} </div>
                          )}
                        />
                      </div>
                      <div className="d-grid">
                        <button
                          type="submit"
                          className="btn btn-primary text-light"
                        >
                          Search
                        </button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Formik>
      <div className="gridResults">
        {succes === true ? (
          heroe.data.results.map((data) => (
            <Results dataHeroe={data} key={data.id} />
          ))
        ) : (
          <> </>
        )}
      </div>
    </>
  );
}

export default SearchHero;
