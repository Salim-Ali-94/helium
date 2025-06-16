import { createSignal } from "solid-js";


export function specsHook() {

	const [domain, setDomain] = createSignal("digital");
	const [configuration, setConfiguration] = createSignal("iir");
	const [response, setResponse] = createSignal("lpf");
	const [approximation, setApproximation] = createSignal("butterworth");
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
			 order, setOrder };

}
