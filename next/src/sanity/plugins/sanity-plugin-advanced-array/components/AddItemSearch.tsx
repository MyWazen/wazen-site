import { ArrayOfObjectsInputProps, insert } from 'sanity'
import { useDocumentPane } from 'sanity/desk'
import { Text, Flex, Autocomplete, BaseAutocompleteOption } from '@sanity/ui'
import { randomKey } from '@sanity/util/content'
import { createElement, useCallback, useState } from 'react'

export function AddItemSearch(props: ArrayOfObjectsInputProps) {
	const { onChange, schemaType } = props
	const [value, setValue] = useState(``)
	const { onPathOpen } = useDocumentPane()

	// When selected, add a new item to the end of the array
	const handleChange = useCallback(
		(nextValue: string) => {
			const newItem = { _type: nextValue, _key: randomKey(12) }
			onChange(insert([newItem], 'after', [-1]))
			// Open the new item's modal
			onPathOpen([...props.path, { _key: newItem._key }])
			setValue(nextValue)
			// Reset the search query
			setTimeout(() => setValue(''), 0)
		},
		[onChange, onPathOpen, props.path],
	)

	if (!schemaType.of.length) {
		return null
	}

	return (
		<Autocomplete
			id="array-type-selector"
			options={schemaType.of.map((memberType: any) => ({
				id: memberType.name,
				value: memberType.name,
				type: memberType,
			}))}
			placeholder={`Search ${schemaType.of.length} item types`}
			renderOption={(option: BaseAutocompleteOption & { type: any }) => (
				<Flex align="center" gap={3} padding={4}>
					{option.type?.icon ? (
						<Text size={3}>{createElement(option.type.icon)}</Text>
					) : null}
					<Text>{option.type.title || option.type.name}</Text>
				</Flex>
			)}
			onChange={handleChange}
			value={value}
			openButton
		/>
	)
}
