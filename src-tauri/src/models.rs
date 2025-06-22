use serde::Deserialize;


#[derive(Debug, Deserialize)]
pub struct Specs {

	pub domain: Domain,
	pub configuration: Configuration,
	pub response: Response,
	pub approximation: Approximation,
	pub passband_ripple: Option<f64>,
	pub stopband_attenuation: Option<f64>,
	pub stopband_ripple: Option<f64>,
	pub passband_attenuation: Option<f64>,
	pub cutoff_frequency: Option<f64>,
	pub center_frequency: Option<f64>,
	pub bandwidth: Option<f64>,
	pub lower_passband_edge_frequency: Option<f64>,
	pub upper_passband_edge_frequency: Option<f64>,
	pub lower_stopband_edge_frequency: Option<f64>,
	pub upper_stopband_edge_frequency: Option<f64>,
	pub transition_width: Option<f64>,
	pub sampling_frequency: Option<f64>,
	pub order: Option<u16>,

}

#[derive(Debug, Deserialize)]
pub enum Domain {

	Digital,
	Analogue,

}

#[derive(Debug, Deserialize)]
pub enum Configuration {

	IIR,
	FIR,
	Active,
	Passive,

}

#[derive(Debug, Deserialize)]
pub enum Response {

	LPF,
	HPF,
	BPF,
	BSF,

}

#[derive(Debug, Deserialize)]
pub enum Approximation {

	Butterworth,
	Chebyshev,
	InverseChebyshev,
	Elliptic,
	Bessel,

}
