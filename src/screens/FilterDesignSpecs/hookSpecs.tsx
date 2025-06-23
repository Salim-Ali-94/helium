import { invoke } from "@tauri-apps/api/core";
import { createSignal } from "solid-js";


export function specsHook() {

	const [domain, setDomain] = createSignal("Digital");
	const [configuration, setConfiguration] = createSignal({ Digital: "IIR", Analogue: "Active" });
	const [response, setResponse] = createSignal("LPF");
	const [approximation, setApproximation] = createSignal("Butterworth");
	const [ripplePassband, setRipplePassband] = createSignal("");
	const [rippleStopband, setRippleStopband] = createSignal("");
	const [attenuationPassband, setAttenuationPassband] = createSignal("");
	const [attenuationStopband, setAttenuationStopband] = createSignal("");
	const [cutoffFrequency, setCutoffFrequency] = createSignal("");
	const [centerFrequency, setCenterFrequency] = createSignal("");
	const [bandwidth, setBandwidth] = createSignal("");
	const [lowerPassbandEdgeFrequency, setLowerPassbandEdgeFrequency] = createSignal("");
	const [upperPassbandEdgeFrequency, setUpperPassbandEdgeFrequency] = createSignal("");
	const [lowerStopbandEdgeFrequency, setLowerStopbandEdgeFrequency] = createSignal("");
	const [upperStopbandEdgeFrequency, setUpperStopbandEdgeFrequency] = createSignal("");
	const [transitionWidth, setTransitionWidth] = createSignal("");
	const [samplingFrequency, setSamplingFrequency] = createSignal("");
	const [order, setOrder] = createSignal("");

	const computeDesign = async () => {

		await invoke("design_filter", { 

			config: {

				domain: "Digital",
				configuration: "IIR",
				response: "BSF",
				approximation: "Butterworth",
				passband_ripple: 0.1,
				stopband_ripple: 0.0,
				passband_attenuation: 0.0,
				stopband_attenuation: 20.0,
				cutoff_frequency: 0.0,
				center_frequency: 5000.0,
				bandwidth: 0.0,
				lower_passband_edge_frequency: 6500.0,
				upper_passband_edge_frequency: 3500.0,
				lower_stopband_edge_frequency: 0.0,
				upper_stopband_edge_frequency: 0.0,
				transition_width: 500.0,
				sampling_frequency: 20e3,
				order: 0,

			}

		});

	}

	return { domain, setDomain,
			 configuration, setConfiguration,
			 response, setResponse,
			 approximation, setApproximation,
			 ripplePassband, setRipplePassband,
			 rippleStopband, setRippleStopband,
			 attenuationPassband, setAttenuationPassband,
			 attenuationStopband, setAttenuationStopband,
			 cutoffFrequency, setCutoffFrequency,
			 centerFrequency, setCenterFrequency,
			 bandwidth, setBandwidth,
			 lowerPassbandEdgeFrequency, setLowerPassbandEdgeFrequency,
			 upperPassbandEdgeFrequency, setUpperPassbandEdgeFrequency,
			 lowerStopbandEdgeFrequency, setLowerStopbandEdgeFrequency,
			 upperStopbandEdgeFrequency, setUpperStopbandEdgeFrequency,
			 transitionWidth, setTransitionWidth,
			 samplingFrequency, setSamplingFrequency,
			 order, setOrder, computeDesign };

}
