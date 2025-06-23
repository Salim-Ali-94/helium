#![allow(non_snake_case)]
#![allow(unused_parens)]
use crate::models;


#[tauri::command]
pub fn design_filter(config: models::Specs) {

	let (domain, configuration, response, approximation,
		 passband_ripple, stopband_ripple, passband_attenuation, stopband_attenuation,
		 cutoff_frequency, center_frequency, bandwidth, lower_passband_edge_frequency,
		 upper_passband_edge_frequency, lower_stopband_edge_frequency, upper_stopband_edge_frequency,
		 sampling_period, order) = parse_specs(config);

	println!("domain = {domain}");
	println!("configuration = {configuration}");
	println!("response = {response}");
	println!("approximation = {approximation}");
	println!("passband_ripple = {passband_ripple}");
	println!("stopband_ripple = {stopband_ripple}");
	println!("passband_attenuation = {passband_attenuation}");
	println!("stopband_attenuation = {stopband_attenuation}");
	println!("cutoff_frequency = {cutoff_frequency}");
	println!("center_frequency = {center_frequency}");
	println!("bandwidth = {bandwidth}");
	println!("lower_passband_edge_frequency = {lower_passband_edge_frequency}");
	println!("upper_passband_edge_frequency = {upper_passband_edge_frequency}");
	println!("lower_stopband_edge_frequency = {lower_stopband_edge_frequency}");
	println!("upper_stopband_edge_frequency = {upper_stopband_edge_frequency}");
	println!("sampling_period = {sampling_period}");
	println!("order = {order}");

}

fn parse_specs(config: models::Specs) -> (String, String, String, String,
										  f64, f64, f64, f64, f64,
										  f64, f64, f64, f64, f64,
										  f64, f64, u16) {

	let models::Specs { domain: category, configuration: structure, response: shape, approximation: profile,
						passband_ripple: ripple_passband, stopband_attenuation: attenuation_stopband, stopband_ripple: ripple_stopband, passband_attenuation: attenuation_passband,
						cutoff_frequency: frequency_cutoff, center_frequency: frequency_center, bandwidth: frequency_delta, lower_passband_edge_frequency: frequency_lower_passband_edge,
						upper_passband_edge_frequency: frequency_upper_passband_edge, lower_stopband_edge_frequency: frequency_lower_stopband_edge, upper_stopband_edge_frequency: frequency_upper_stopband_edge,
						transition_width: transition_band, sampling_frequency: frequency_sampling, order: degree } = config;

	let mut domain = String::from("");
	let mut configuration = String::from("");
	let mut response = String::from("");
	let mut approximation = String::from("");
	let mut passband_ripple = 0.0;
	let mut stopband_attenuation = 0.0;
	let mut stopband_ripple = 0.0;
	let mut passband_attenuation = 0.0;
	let mut cutoff_frequency = 0.0;
	let mut center_frequency = 0.0;
	let mut bandwidth = 0.0;
	let mut lower_passband_edge_frequency = 0.0;
	let mut upper_passband_edge_frequency = 0.0;
	let mut lower_stopband_edge_frequency = 0.0;
	let mut upper_stopband_edge_frequency = 0.0;
	let mut transition_width = 0.0;
	let mut sampling_period = 0.0;
	let mut order = 0;

	match category {

		models::Domain::Digital => domain = "digital".to_string(),
		models::Domain::Analogue => domain = "analogue".to_string(),

	}

	match structure {

		models::Configuration::IIR => configuration = "iir".to_string(),
		models::Configuration::FIR => configuration = "fir".to_string(),
		models::Configuration::Active => configuration = "active".to_string(),
		models::Configuration::Passive => configuration = "passive".to_string(),

	}

	match shape {

		models::Response::LPF => response = "lpf".to_string(),
		models::Response::HPF => response = "hpf".to_string(),
		models::Response::BPF => response = "bpf".to_string(),
		models::Response::BSF => response = "bsf".to_string(),

	}

	match profile {

		models::Approximation::Butterworth => approximation = "butterworth".to_string(),
		models::Approximation::Chebyshev => approximation = "chebyshev".to_string(),
		models::Approximation::InverseChebyshev => approximation = "inverse_chebyshev".to_string(),
		models::Approximation::Elliptic => approximation = "elliptic".to_string(),
		models::Approximation::Bessel => approximation = "bessel".to_string(),

	}

	if let Some(Rp) = ripple_passband {

		passband_ripple = Rp.abs();

	}

	if let Some(Rs) = ripple_stopband {

		stopband_ripple = Rs.abs();

	}

	if let Some(Ap) = attenuation_passband {

		passband_attenuation = Ap.abs();

	}

	if let Some(As) = attenuation_stopband {

		stopband_attenuation = As.abs();

	}

	if let Some(Fc) = frequency_cutoff {

		cutoff_frequency = Fc.abs();

	}

	if let Some(f0) = frequency_center {

		center_frequency = f0.abs();

	}

	if let Some(BW) = frequency_delta {

		bandwidth = BW.abs();

	}

	if let Some(Fpl) = frequency_lower_passband_edge {

		lower_passband_edge_frequency = Fpl.abs();

	}

	if let Some(Fpu) = frequency_upper_passband_edge {

		upper_passband_edge_frequency = Fpu.abs();

	}

	if let Some(Fsl) = frequency_lower_stopband_edge {

		lower_stopband_edge_frequency = Fsl.abs();

	}

	if let Some(Fsu) = frequency_upper_stopband_edge {

		upper_stopband_edge_frequency = Fsu.abs();

	}

	if let Some(delta) = transition_band {

		transition_width = delta.abs();

	}

	if let Some(Fs) = frequency_sampling {

		if (Fs.abs() > 0.0) {

			sampling_period = 1.0 / Fs.abs();

		}

	}

	if let Some(N) = degree {

		order = N;

	}

	if ((response.as_str() == "bpf") &&
		(bandwidth > 0.0) &&
		(center_frequency > 0.0) &&
		(lower_passband_edge_frequency == 0.0)) {

		lower_passband_edge_frequency = center_frequency - bandwidth / 2.0;

	} else if ((response.as_str() == "bsf") &&
			   (bandwidth > 0.0) &&
			   (center_frequency > 0.0) &&
			   (lower_stopband_edge_frequency == 0.0)) {

		lower_stopband_edge_frequency = center_frequency - bandwidth / 2.0;

	}

	if ((bandwidth > 0.0) &&
		(center_frequency > 0.0) &&
		(response.as_str() == "bpf") &&
		(upper_passband_edge_frequency == 0.0)) {

		upper_passband_edge_frequency = center_frequency + bandwidth / 2.0;

	} else if ((bandwidth > 0.0) &&
			   (center_frequency > 0.0) &&
			   (response.as_str() == "bsf") &&
			   (upper_stopband_edge_frequency == 0.0)) {

		upper_stopband_edge_frequency = center_frequency + bandwidth / 2.0;

	}

	if (lower_passband_edge_frequency > upper_passband_edge_frequency) {

		let remember = lower_passband_edge_frequency;
		lower_passband_edge_frequency = upper_passband_edge_frequency;
		upper_passband_edge_frequency = remember;

	}

	if (lower_stopband_edge_frequency > upper_stopband_edge_frequency) {

		let remember = lower_stopband_edge_frequency;
		lower_stopband_edge_frequency = upper_stopband_edge_frequency;
		upper_stopband_edge_frequency = remember;

	}

	if ((response.as_str() == "bpf") &&
		(transition_width > 0.0) &&
		(lower_stopband_edge_frequency == 0.0)) {

		lower_stopband_edge_frequency = lower_passband_edge_frequency - transition_width;

	} else if ((response.as_str() == "bsf") &&
			   (transition_width > 0.0) &&
			   (lower_passband_edge_frequency == 0.0)) {

		lower_passband_edge_frequency = lower_stopband_edge_frequency - transition_width;

	}

	if ((response.as_str() == "bpf") &&
		(transition_width > 0.0) &&
		(upper_stopband_edge_frequency == 0.0)) {

		upper_stopband_edge_frequency = upper_passband_edge_frequency + transition_width;

	} else if ((response.as_str() == "bsf") &&
			   (transition_width > 0.0) &&
			   (upper_passband_edge_frequency == 0.0)) {

		upper_passband_edge_frequency = upper_stopband_edge_frequency + transition_width;

	}

	if ((response.as_str() == "bpf") &&
		(transition_width > 0.0) &&
		(lower_passband_edge_frequency == 0.0)) {

		lower_passband_edge_frequency = lower_stopband_edge_frequency + transition_width;

	} else if ((response.as_str() == "bsf") &&
			   (transition_width > 0.0) &&
			   (lower_stopband_edge_frequency == 0.0)) {

		lower_stopband_edge_frequency = lower_passband_edge_frequency + transition_width;

	}

	if ((response.as_str() == "bpf") &&
		(transition_width > 0.0) &&
		(upper_passband_edge_frequency == 0.0)) {

		upper_passband_edge_frequency = upper_stopband_edge_frequency - transition_width;

	} else if ((response.as_str() == "bsf") &&
			   (transition_width > 0.0) &&
			   (upper_stopband_edge_frequency == 0.0)) {

		upper_stopband_edge_frequency = upper_passband_edge_frequency - transition_width;

	}

	if ((lower_passband_edge_frequency > 0.0) &&
		(upper_passband_edge_frequency > 0.0) &&
		(center_frequency == 0.0)) {

		center_frequency = (lower_passband_edge_frequency*upper_passband_edge_frequency).sqrt();

	} else if ((lower_stopband_edge_frequency > 0.0) &&
			   (upper_stopband_edge_frequency > 0.0) &&
			   (center_frequency == 0.0)) {

		center_frequency = (lower_stopband_edge_frequency*upper_stopband_edge_frequency).sqrt();

	}

	if ((response.as_str() == "bpf") &&
		(lower_passband_edge_frequency > 0.0) &&
		(upper_passband_edge_frequency > 0.0) &&
		(bandwidth == 0.0)) {

		bandwidth = upper_passband_edge_frequency - lower_passband_edge_frequency;

	} else if ((response.as_str() == "bsf") &&
			   (lower_stopband_edge_frequency > 0.0) &&
			   (upper_stopband_edge_frequency > 0.0) &&
			   (bandwidth == 0.0)) {

		bandwidth = upper_stopband_edge_frequency - lower_stopband_edge_frequency;

	}

	return (domain, configuration, response, approximation,
			passband_ripple, stopband_ripple, passband_attenuation, stopband_attenuation,
			cutoff_frequency, center_frequency, bandwidth, lower_passband_edge_frequency,
			upper_passband_edge_frequency, lower_stopband_edge_frequency, upper_stopband_edge_frequency,
			sampling_period, order);

}
