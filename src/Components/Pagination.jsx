import { useMediaQuery } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./Pagination.css";

const CustomPagination = ({
  currentPage,
  paginate,
  totalExercises,
  exercisesPerPage,
}) => {

  const totalPages = Math.ceil(totalExercises / exercisesPerPage);

  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <div className="pagination-container">

      <Stack spacing={2}>

        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={(e, value) => paginate(value)}
          color="primary"
          shape="rounded"
          size={isMobile ? "medium" : "large"}

          siblingCount={isMobile ? 0 : 1}
          boundaryCount={isMobile ? 0 : 1}
        />

      </Stack>

    </div>
  );
};

export default CustomPagination;