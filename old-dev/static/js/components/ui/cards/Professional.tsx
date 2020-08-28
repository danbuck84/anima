import React from "react";
import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardContent,
  Typography,
  makeStyles,
  Theme,
} from "@material-ui/core";
import isMobile from "../../../utils/isMobile";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: isMobile ? "98%" :280,
    margin: theme.spacing(1),
  },
}));

export default function Professional({ idx }: { idx: number }) {
  const { root } = useStyles();
  return (
    <Card key={idx} className={root}>
      <CardHeader
        avatar={
          <Avatar
            src={`https://randomuser.me/api/portraits/thumb/men/${idx}.jpg`}
          />
        }
        title={`Profissional N${idx+1}`}
        subheader="Phd, DBS, DSS"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          • Protocolos; • Audiências; • Cópias de processos; • Preparos para
          recursos (custas processuais); • Visitas periódicas aos órgãos
          judiciários;
        </Typography>
      </CardContent>
    </Card>
  );
}
