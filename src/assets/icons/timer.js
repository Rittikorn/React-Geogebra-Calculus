const Timer = ({ width = "25", height = "30", color = "white" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.48 10.65C24.1007 12.743 24.9838 15.3131 24.9919 17.9601C25 20.6072 24.1326 23.1827 22.5248 25.2855C20.917 27.3884 18.6591 28.9006 16.1025 29.5868C13.5459 30.2729 10.8341 30.0944 8.38948 29.0792C5.94484 28.0639 3.9045 26.2688 2.58614 23.9734C1.26778 21.678 0.745392 19.0111 1.10032 16.3879C1.45525 13.7647 2.66756 11.3325 4.54851 9.46998C6.42946 7.60745 8.87348 6.41911 11.5 6.09V3H14.5V6.09C16.69 6.36 18.7 7.23 20.35 8.52L22.54 6.33L24.67 8.46L22.48 10.635V10.65ZM13 27C15.387 27 17.6761 26.0518 19.364 24.364C21.0518 22.6761 22 20.3869 22 18C22 15.6131 21.0518 13.3239 19.364 11.636C17.6761 9.94821 15.387 9 13 9C10.6131 9 8.32388 9.94821 6.63605 11.636C4.94823 13.3239 4.00001 15.6131 4.00001 18C4.00001 20.3869 4.94823 22.6761 6.63605 24.364C8.32388 26.0518 10.6131 27 13 27ZM8.50001 0H17.5V3H8.50001V0ZM16.18 12.69L18.31 14.82L13 20.1L10.885 18L16.18 12.69Z"
        fill={color}
      />
    </svg>
  );
};

export default Timer;
