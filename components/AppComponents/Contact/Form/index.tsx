import {
  Button,
  Grid,
  InputAdornment,
  TextField,
  Tooltip,
} from "@material-ui/core";
import { AccountCircle, Email, Person, Phone } from "@material-ui/icons";
import { Form, Formik, useFormik } from "formik";
import React from "react";
import ContactFormLayout from "./styles";
import * as Yup from "yup";
import NumberFormat from "react-number-format";
import FeedbackDialog from "../../../Util/FeedbackDialog";
import axios from "axios";
import { FeedbackSeverity } from "../../../Util/FeedbackDialog/styles";

interface Props {
  loadingFn: (loading: boolean) => void;
}

interface FeedbackState {
  severity: FeedbackSeverity;
  message: string;
  title: string;
}

const ContactForm = ({ loadingFn }: Props) => {
  const [feedbackOpen, setFeedbackOpen] = React.useState<boolean>(false);
  const [feedbackState, setFeedbackState] = React.useState<FeedbackState>({
    severity: "success",
    message:
      "Sua mensagem foi enviada com sucesso, em breve entraremos em contato.",
    title: "Mensagem enviada com sucesso!",
  });

  const toggleFeedbackDialog = (open: boolean): void => {
    setFeedbackOpen(open);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    enableReinitialize: true,
    validateOnMount: true,
    validationSchema: Yup.object({
      name: Yup.string().required("Este campo é obrigatório"),
      email: Yup.string()
        .required("Este campo é obrigatório")
        .email("É preciso ser um e-mail válido"),
      phone: Yup.string().required("Este campo é obrigatório"),
      message: Yup.string().required("Este campo é obrigatório"),
    }),

    onSubmit: (values, actions) => {
      actions.setSubmitting(true);
      loadingFn(true);

      axios
        .post(
          "https://us-central1-atlascodedev-landing.cloudfunctions.net/api/sendMail/munay",
          {
            name: values.name,
            email: values.email,
            phone: values.phone,
            message: values.message,
          }
        )
        .then((result) => {
          console.log(result);
          toggleFeedbackDialog(true);
          loadingFn(false);
          setFeedbackState({
            severity: "success",
            message:
              "Sua mensagem foi enviada com sucesso, em breve entraremos em contato.",
            title: "Mensagem enviada com sucesso!",
          });
          actions.setSubmitting(false);
          actions.resetForm();
        })
        .catch((error) => {
          loadingFn(false);
          toggleFeedbackDialog(true);
          console.log(error);
          setFeedbackState({
            severity: "error",
            message:
              "Ocorreu um erro ao tentar enviar a sua mensagem, por favor, tente novamente ou contate-nos via WhatsApp",
            title: "Erro ao enviar formulário",
          });
          actions.setSubmitting(false);
          actions.resetForm();
        });
    },
  });

  return (
    <ContactFormLayout>
      <div style={{ paddingTop: "10px", width: "100%" }}>
        <Grid container spacing={1} alignItems="flex-end" justify="flex-start">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField
              name="name"
              value={formik.values["name"]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched["name"] && Boolean(formik.errors["name"])}
              fullWidth
              label="Nome"
              helperText={formik.errors["name"]}
            />
          </Grid>
        </Grid>
      </div>

      <div style={{ paddingTop: "10px", width: "100%" }}>
        <Grid container spacing={1} alignItems="flex-end" justify="flex-start">
          <Grid item>
            <Phone />
          </Grid>
          <Grid item>
            <NumberFormat
              customInput={TextField}
              format={"(##) #-####-####"}
              value={formik.values["phone"]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched["phone"] && Boolean(formik.errors["phone"])}
              helperText={formik.errors["phone"]}
              name="phone"
              fullWidth
              label="Telefone"
            />
          </Grid>
        </Grid>
      </div>

      <div style={{ paddingTop: "10px", width: "100%" }}>
        <Grid container spacing={1} alignItems="flex-end" justify="flex-start">
          <Grid item>
            <Email />
          </Grid>
          <Grid item>
            <TextField
              name="email"
              value={formik.values["email"]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched["email"] && Boolean(formik.errors["email"])}
              helperText={formik.errors["email"]}
              fullWidth
              label="Email"
            />
          </Grid>
        </Grid>
      </div>

      <div style={{ paddingTop: "20px", width: "100%" }}>
        <Grid container spacing={1} justify="center">
          <Grid style={{ width: "100%" }} item>
            <TextField
              value={formik.values["message"]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched["message"] && Boolean(formik.errors["message"])
              }
              helperText={formik.errors["message"]}
              name="message"
              fullWidth
              label="Mensagem"
              multiline
              variant="outlined"
              rowsMax={4}
              rows={2}
            />
          </Grid>
        </Grid>
      </div>

      <div
        style={{
          width: "100%",
          paddingTop: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Tooltip
          title={
            formik.isValid
              ? ""
              : "Verifique todos os campos antes de prosseguir"
          }
        >
          <span>
            <Button
              color="primary"
              size="large"
              variant="contained"
              onClick={formik.submitForm}
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Enviar!
            </Button>
          </span>
        </Tooltip>
      </div>
      <FeedbackDialog
        message={feedbackState.message}
        severity={feedbackState.severity}
        title={feedbackState.title}
        closeFn={() => toggleFeedbackDialog(false)}
        onClose={() => toggleFeedbackDialog(false)}
        open={feedbackOpen}
      />
    </ContactFormLayout>
  );
};

export default ContactForm;
