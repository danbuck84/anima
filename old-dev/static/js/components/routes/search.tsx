import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  Input,
  InputLabel,
  Link,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React, { useState } from "react";
import { SnackbarProvider, useSnackbar } from "notistack";

import Professional from "../ui/cards/Professional";
import isMobile from "../../utils/isMobile";

const useStyles = makeStyles((theme) => ({
  root: { padding: theme.spacing(2) },
  selector: {
    minWidth: isMobile ? "98%" : 250,
    margin: theme.spacing(1),
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
}));

const categories = [
  "Mediação Sistêmica",
  "Mediação Transformativa",
  "Mediação método Harvard",
  "Comunicação não violenta",
  "Constelação Sistêmica",
  "Psicólogos",
  "Peritos",
  "Assistentes técnicos",
  "Tradutores",
];

const skillsList = [
  "Assistência emocional",
  "Parando o conflito",
  "Assuntos de família",
  "Controle de raiva",
];

const letters =["A","B","C","D","E","F","G","H","I","J","K","M","N","Z"]
export default function Search() {
  const [professional, setprofessional] = useState(categories[0]);
  const [skill, setskill] = useState<string[]>([]);
  const [showModal, setshowModal] = useState(false);
  const [selectedProfesional, setselectedProfesional] = useState(1);
  const [showLink, setshowLink] = useState(false);
  const { root, selector, chips, chip } = useStyles();
  const randomString = (length: number) => (Math.random().toString(36)+'00000000000000000').slice(2, 3).toUpperCase()

  const handleChange = (event: any) => {
    setprofessional(event.target.value);
  };

  const handleChangeMultiple = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setskill(event.target.value as string[]);
  };
  return (
    <React.Fragment>
      <Paper className={root}>
        <Typography variant="h4" gutterBottom>
          Procurar profissionais
        </Typography>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <FormControl className={selector}>
            <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={professional}
              onChange={handleChange}
              autoWidth
            >
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            id="standard-basic"
            label="Pesquisa de texto"
            className={selector}
            style={{ flexGrow: 1 }}
          />
        </div>
        <FormControl className={selector} style={{ minWidth: "98%" }}>
          <InputLabel id="demo-mutiple-chip-label">Especialização</InputLabel>
          <Select
            labelId="demo-mutiple-chip-label"
            id="demo-mutiple-chip"
            multiple
            value={skill}
            onChange={handleChangeMultiple}
            input={<Input id="select-multiple-chip" />}
            renderValue={(selected) => (
              <div className={chips}>
                {(selected as string[]).map((value: string) => (
                  <Chip key={value} label={value} className={chip} />
                ))}
              </div>
            )}
          >
            {skillsList.map((skill) => (
              <MenuItem key={skill} value={skill}>
                {skill}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            className={selector}
            variant="contained"
            color="primary"
            style={{ textAlign: "center" }}
          >
            Procurar
          </Button>
        </div>
      </Paper>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {[...Array(9)].map((_, idx) => (
          <div
            onClick={() => {
              setselectedProfesional(idx);
              setshowModal(true);
            }}
          >
            <Professional idx={idx} />
          </div>
        ))}
      </div>

      {showModal ? (
        <Dialog
          open={!!showModal}
          onClose={() => setshowModal(false)}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Create a meeting for Profesional
          </DialogTitle>
          <DialogContent>
            <Card key={selectedProfesional} className={root}>
              <CardHeader
                avatar={
                  <Avatar
                    src={`https://randomuser.me/api/portraits/thumb/men/${selectedProfesional}.jpg`}
                  />
                }
                title={`Profissional N${selectedProfesional + 1}`}
                subheader="Phd, DBS, DSS"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  • Protocolos; • Audiências; • Cópias de processos; • Preparos
                  para recursos (custas processuais); • Visitas periódicas aos
                  órgãos judiciários;
                </Typography>
              </CardContent>
            </Card>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Invite people to meeting"
              type="email"
              placeholder="person1@gmail.com , person2@hotmail.com"
              fullWidth
            />{" "}
            <Typography variant="body2" color="textSecondary" component="p">
              Depois que o profissional aceitar sua reunião, você receberá um
              email com o link
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setshowModal(false)} color="primary">
              Cancel
            </Button>
            <Button
              onClick={() => {
                setshowLink(true);
              }}
              color="primary"
            >
              Request
            </Button>
          </DialogActions>
        </Dialog>
      ) : null}
      {showLink ? (
        <Dialog open={showLink} onClose={() => setshowLink(false)}>
          <DialogTitle>The professional has accepted your meeting!</DialogTitle>
          <DialogContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Here is your
              <Link
                href={`https://hangouts.google.com/call/S0J3sCWNgxlZvr_Q6Ad_AEE${letters[selectedProfesional]}`}
              >
                {" "}Link
              </Link>
            </Typography>
          </DialogContent>
          <DialogActions></DialogActions>
        </Dialog>
      ) : null}
    </React.Fragment>
  );
}
