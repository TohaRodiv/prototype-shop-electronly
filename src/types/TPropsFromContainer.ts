export type TPropsFromContainer = {
	handler?: React.ReactEventHandler
	handlers?: {
		[handlerName: string]: React.ReactEventHandler
	}
	state?: {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		[stateName: string]: any
	}
}