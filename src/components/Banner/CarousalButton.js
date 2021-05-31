function CarousalButton({ index }) {
  return (
    <button
      type="button"
      data-bs-target="#carouselExampl"
      data-bs-slide-to={index}
      aria-label={`Slide ${index + 1}`}
      className={index === 0 ? "active" : ""}
      aria-current={index === 0 ? "true" : ""}
    ></button>
  );
}

export default CarousalButton;
