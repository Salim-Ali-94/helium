

#[derive(Debug)]
pub struct Specs {

	pub domain: Domain,
	pub configuration: Configuration,
	pub response: Response,
	pub approximation: Approximation,

}

#[derive(Debug)]
pub enum Domain {

	Digital,
	Analogue,

}

#[derive(Debug)]
pub enum Configuration {

	IIR,
	FIR,
	Active,
	Passive,

}

#[derive(Debug)]
pub enum Response {

	LPF,
	HPF,
	BPF,
	BSF,

}

#[derive(Debug)]
pub enum Approximation {

	Butterworth,
	Chebyshev,
	InverseChebyshev,
	Elliptic,
	Bessel,

}
