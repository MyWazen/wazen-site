import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
	width: 32,
	height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
	return new ImageResponse(
		(
			// ImageResponse JSX element
			<div
				style={{
					// fontSize: 24,
					background: '#0D9488',
					width: '100%',
					height: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					color: 'white',
					borderRadius: '4',
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="25"
					height="14"
					fill="none"
				>
					<path
						fill="#FFF"
						d="M.428 3.867C.438 1.743 2.087.178 4.096.315c.918.063 1.71.452 2.296 1.164 1.242 1.508 2.456 3.038 3.677 4.562 1.433 1.788 2.861 3.58 4.296 5.366.487.607 1.22.81 1.883.546a1.652 1.652 0 0 0 1.06-1.654 1.595 1.595 0 0 0-.36-.927c-1.717-2.145-3.439-4.288-5.138-6.448-.449-.574-.971-.901-1.708-.798a1.732 1.732 0 0 0-.505.18c-.156.072-.266.07-.38-.078a26.63 26.63 0 0 0-.792-.993c-.127-.15-.11-.24.05-.35C9.887-.088 11.9.2 12.986 1.547c.847 1.049 1.684 2.103 2.517 3.166.155.2.24.18.384-.004.83-1.052 1.663-2.104 2.508-3.146a3.38 3.38 0 0 1 5.437.24c.875 1.287.8 2.976-.32 4.34a427.263 427.263 0 0 0-5.082 6.36c-1.372 1.74-3.943 1.804-5.374.11-.195-.23-.39-.463-.569-.708-.122-.17-.186-.17-.28.021-.473.939-1.207 1.579-2.237 1.816-1.438.33-2.626-.112-3.546-1.258a824.997 824.997 0 0 1-4.413-5.533A18.93 18.93 0 0 1 .765 5.208C.5 4.78.424 4.27.43 3.868H.428Zm3.433-1.764c-.65.012-1.155.29-1.457.866-.369.71-.218 1.36.273 1.966.984 1.217 1.958 2.44 2.934 3.663.76.953 1.515 1.908 2.278 2.859.449.56 1.254.757 1.9.477a1.71 1.71 0 0 0 .991-1.748c-.063-.484-.36-.832-.642-1.19-1.64-2.06-3.287-4.12-4.931-6.178-.344-.43-.765-.725-1.346-.717v.002Zm15.047 6.926c.045-.05.109-.118.165-.19 1.026-1.283 2.047-2.57 3.078-3.847.458-.567.663-1.176.378-1.875-.477-1.179-1.985-1.372-2.818-.362-.353.425-.69.865-1.033 1.298-.56.701-1.118 1.407-1.684 2.101-.13.158-.135.28 0 .428.122.134.232.278.343.421.518.666 1.033 1.334 1.567 2.026h.005Z"
					/>
				</svg>
			</div>
		),
		// ImageResponse options
		{
			// For convenience, we can re-use the exported icons size metadata
			// config to also set the ImageResponse's width and height.
			...size,
		},
	)
}