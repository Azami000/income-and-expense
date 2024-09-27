// const confirmHandler = async () => {
//   const token = window.localStorage.getItem("token");
//   if (step === 2) {
//     try {
//       await axios.post(
//         "http://localhost:8000/step",
//         {
//           currency: hello.currency,
//           balance: hello.balance,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       router.push("/");
//     } catch (error) {
//       console.error(error);
//       // Display error message to the user
//       alert("Error: " + error.response.data.message || "Unauthorized");
//     }
//     return;
//   }
//   setStep((prev) => prev + 1);
// };

