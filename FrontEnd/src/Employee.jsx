function Employee(props) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "15px",
        margin: "10px",
        borderRadius: "8px",
      }}
    >
      <h2>Employee Details</h2>
      <p><strong>Employee Name:</strong> {props.name}</p>
      <p><strong>Employee ID:</strong> {props.id}</p>
      <p><strong>Department:</strong> {props.department}</p>
      <p><strong>Designation:</strong> {props.designation}</p>
      <p><strong>Salary:</strong> ₹{props.salary}</p>
    </div>
  );
}

export default Employee;