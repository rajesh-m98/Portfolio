document.addEventListener("DOMContentLoaded", () => {
    
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    // Collect form data
    const formData = new URLSearchParams();
    formData.append("Name", document.getElementById("name").value);
    formData.append("Mobile Number", document.getElementById("phone").value);
    formData.append("Email", document.getElementById("email").value);
    formData.append("Message", document.getElementById("message").value);

    try {
      debugger;
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxhgtgJNdpXf6LeIQXzzVHMnoEk5P4NCEVUPZ-2BueAv8SDgqD5y0woT_ojOiqgbcA6VQ/exec",
        {
          method: "POST",
          body: formData.toString(),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      const result = await response.json();
      console.log(result);

      if (result.status === "success") {
        alert("Message saved to Google Sheets successfully!");
        document.getElementById("contactForm").reset(); // Clear the form
      } else {
        alert("Failed to save the message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending your message.");
    }
  });
});
