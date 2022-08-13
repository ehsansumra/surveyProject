
const alternateBG = (index) => {
    let backgroundColor = "rgba(66, 65, 77, 1)";
    if (index % 2 !== 0) backgroundColor = "rgb(56, 56, 65)";
    return backgroundColor
}

export default alternateBG;