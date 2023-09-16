import { Box, Typography } from "@mui/material";
import "./app.css";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
import Table from "./components/Table";
import axios from "axios";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import DataRow from "./components/DataRow";
import Header from "./components/Header";

function App() {
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      let id = 1;
      try {
        const { data } = await axios.get("/api/data");
        const result = data?.result[0];
        const finalResponse = result?.data.map((item) => ({
          ...item,
          id: id++,
        }));
        setTableData(finalResponse);

        setIsLoading(false);
      } catch (error) {
        console.log("error", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <Box>
      <Navbar />
      <Typography
        textAlign={"center"}
        mt={2}
        color={"#818389"}
        fontWeight={"bold"}
        fontSize={30}
      >
        Best Price To Trade
      </Typography>
      <Stats />

      {isLoading ? (
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          color={"white"}
        >
          <CircularProgress />
        </Box>
      ) : (
        // <Table tableData={tableData} />
        <>
          <Header />
          <Box
            width={{ sm: "100%", md: "95%" }}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            ml={4}
          >
            {tableData.map((item, id) => (
              <DataRow key={id} item={item} />
            ))}
          </Box>
        </>
      )}
    </Box>
  );
}

export default App;
