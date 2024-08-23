import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
  Unstable_Grid2,
} from "@mui/material";

function Services() {
  return (
    <Container id="ourservices" sx={{ padding: "1em" }}>
      <Typography
        variant="h4"
        sx={{
          margin: "1em",
          color: "var(--theme-main-color)",
          fontWeight: "bold",
        }}
      >
        Our Services
      </Typography>
      <Box>
        <Unstable_Grid2
          container
          spacing={2}
          justifyContent="space-around"
          sx={{ marginBottom: "0.5em" }}
        >
          {services.map((service) => (
            <Unstable_Grid2 key={service.id} xs={12} md={6}>
              <Card variant="outlined">
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "var(--theme-main-color)",
                      fontWeight: "bold",
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography variant="subtitle2">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Unstable_Grid2>
          ))}
        </Unstable_Grid2>
        <Typography variant="subtitle1" sx={{ marginTop: "0.5em" }}>
          More services coming soon!
        </Typography>
      </Box>
    </Container>
  );
}

const services = [
  {
    title: "S.E Report Fulfilment",
    description:
      "Our S.E. Report Fulfillment entails the comprehensive documentation of structural engineering aspects such as analysis, design, and specifications for a construction project. These reports ensure compliance with safety standards, provide guidance for construction teams, and serve as a reference for stakeholders throughout the project lifecycle.",
  },
  {
    title: "Crawl Space Evaluations",
    description:
      "We will do a thorough inspections and assessments of the subfloor area beneath a building, typically performed to identify structural issues, moisture problems, or pest infestations. These evaluations will help us understand the condition of your crawl space and determine any necessary repairs or maintenance to ensure the overall integrity of the structure.",
  },
  {
    title: "Structural Support Solutions",
    description:
      "Our residential home solutions involve implementing measures such as reinforcing beams, columns, or foundation systems to enhance the stability and strength of the structure. We will tailor the solutions to address specific issues like sagging floors, foundation settlement, or structural damage, ensuring the safety and longevity of the home.",
  },
  {
    title: "Water Intrusion Solutions",
    description:
      "Our residential homes solutions encompass various strategies, including proper drainage systems, waterproofing coatings, and sealing vulnerable entry points such as windows and doors, to prevent moisture from entering the interior spaces. These solutions aim to safeguard the home against water damage, mold growth, and structural deterioration, ensuring a dry and healthy living environment for residents.",
  },
  {
    title: "Insect and Water Damage Repair",
    description:
      "Inset and water repair for residential homes involve addressing damage caused by water infiltration, which may include repairing affected walls, floors, or ceilings, and replacing any compromised materials. Additionally, it often entails restoring the structural integrity of the affected areas and implementing preventative measures to mitigate future water intrusion issues.",
  },
  {
    title: "Vapor Barrier and Insulation Installation",
    description:
      "Vapor barrier and insulation installation involves placing materials such as plastic sheeting or foil-faced insulation to minimize moisture transmission and enhance thermal efficiency within residential structures. By creating a barrier against moisture and optimizing temperature regulation, these installations help improve indoor comfort, reduce energy costs, and protect against potential mold growth or structural damage.",
  },
  {
    title: "Concrete and Masonry Solutions",
    description:
      "Concrete and masonry solutions encompass various techniques and materials used to construct durable structures such as foundations, walls, and pathways, utilizing materials like concrete, bricks, or stones. These solutions ensure structural integrity, aesthetic appeal, and longevity in residential construction projects, providing strength, stability, and resistance to environmental factors like weathering and seismic activity.",
  },
];

export default Services;
