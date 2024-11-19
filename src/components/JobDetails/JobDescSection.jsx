import { Box, Typography } from "@mui/material";

function JobDescriptionSection({ sections }) {
  return (
    <>
      {sections.map(({ title, id, content }) =>
        content ? (
          <Box key={id}>
            <Typography fontWeight="650">{title}</Typography>
            <Box id={id} mt={3} mb={5}>
              {Array.isArray(content) ? (
                content.map((item) => (
                  <Typography key={item} lineHeight="1.4rem" mt={2}>
                    {item}
                  </Typography>
                ))
              ) : (
                <Typography lineHeight="1.4rem">{content}</Typography>
              )}
            </Box>
          </Box>
        ) : null,
      )}
    </>
  );
}

export default JobDescriptionSection;
