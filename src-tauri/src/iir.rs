use std::f64::consts;


pub fn butterworth_order(response: &str, ripple_passband: &f64, ripple_stopband: &f64, attenuation_passband: &f64, attenuation_stopband: &f64,
						 cutoff_frequency: &f64, center_frequency: &f64, bandwidth: &f64, sampling_period: &f64,
						 lower_passband_edge_frequency: &f64, upper_passband_edge_frequency: &f64, lower_stopband_edge_frequency: &f64, upper_stopband_edge_frequency: &f64) -> u16 {

	let mut order: u16 = 0;
	let mut normalized_frequency: f64 = 0.0;

	if (response == "lpf") {

		let frequency_pass = 2.0*consts::PI*cutoff_frequency;
		let frequency_stop = 2.0*consts::PI*upper_stopband_edge_frequency;
		let frequency_pass_warped = (2.0 / sampling_period)*(frequency_pass*sampling_period / 2.0).tan();
		let frequency_stop_warped = (2.0 / sampling_period)*(frequency_stop*sampling_period / 2.0).tan();
		normalized_frequency = frequency_stop_warped / frequency_pass_warped;

	}

	return order;

}
