import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

export const UserPageTimeline = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <Typography
        sx={{
          fontFamily: "inherit",
          fontSize: 20,
          color: theme.palette.primary.main,
          fontWeight: 500,
          opacity: 0.8,
          mb: 2,
        }}
      >
        Historial de pagos
      </Typography>
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 1,
            mt:4,
            paddingRight: 2
          },
        }}
      >
        <TimelineItem>
          <TimelineOppositeContent
            color="textSecondary"
            sx={{ fontFamily: "inherit", fontSize: 12 }}
          >
            10-08-2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <CheckIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", fontFamily: "inherit" }}>
            <Typography
              variant="h6"
              component="span"
              sx={{ fontFamily: "inherit" }}
            >
              $20.000
            </Typography>
            <Typography sx={{ fontFamily: "inherit", fontSize: 14 }}>
              ****2342 Visa
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            color="textSecondary"
            sx={{ fontFamily: "inherit", fontSize: 12 }}
          >
            10-09-2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="error">
              <CloseIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "8px", fontFamily: "inherit" }}>
            <Typography
              variant="h6"
              component="span"
              sx={{ fontFamily: "inherit" }}
            >
              $20.000
            </Typography>
            <Typography sx={{ fontFamily: "inherit", fontSize: 14 }}>Pago rechazado</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            color="textSecondary"
            sx={{ fontFamily: "inherit", fontSize: 12 }}
          >
            10-10-2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <CheckIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "8px", fontFamily: "inherit" }}>
            <Typography
              variant="h6"
              component="span"
              sx={{ fontFamily: "inherit" }}
            >
              $20.000
            </Typography>
            <Typography sx={{ fontFamily: "inherit", fontSize: 14 }}>
              ****2342 Visa
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            color="textSecondary"
            sx={{ fontFamily: "inherit", fontSize: 12 }}
          >
            10-11-2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <AccessTimeIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "8px", fontFamily: "inherit" }}>
            <Typography
              variant="h6"
              component="span"
              sx={{ fontFamily: "inherit" }}
            >
              $20.000
            </Typography>
            <Typography sx={{ fontFamily: "inherit", fontSize: 14 }}>
              Pago pendiente
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
};
