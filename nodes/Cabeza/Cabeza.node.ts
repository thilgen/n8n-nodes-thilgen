import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

export class Cabeza implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Cabeza',
		name: 'cabeza',
		icon: 'file:cabeza.svg',
		group: ['transform'],
		subtitle: '',
		version: 1,
		description: 'Get the first item',
		defaults: {
			name: 'Cabeza',
		},
		inputs: ['main'],
		outputs: ['main'],
		properties: [],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		let returnData = items;
		returnData = items.slice(0, 1);
		return [returnData];
	}
}
