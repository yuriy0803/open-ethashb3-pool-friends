package proxy

import "encoding/json"

type JSONRpcReq struct {
	Id     json.RawMessage `json:"id"`
	Method string          `json:"method"`
	Params json.RawMessage `json:"params"`
}

type JSONStratumReq struct {
	Id     interface{} `json:"id"`
	Method string      `json:"method"`
	Params interface{} `json:"params"`
	Height string      `json:"height"`
	Algo   string      `json:"algo"`
}

type StratumReq struct {
	JSONRpcReq
	Worker string `json:"worker"`
}

// Stratum
type JSONPushMessage struct {
	// FIXME: Temporarily add ID for Claymore compliance
	Id      int64       `json:"id"`
	Version string      `json:"jsonrpc"`
	Result  interface{} `json:"result"`
}

type JSONRpcResp struct {
	Id      json.RawMessage `json:"id,omitempty"`
	Version string          `json:"jsonrpc,omitempty"`
	Result  interface{}     `json:"result"`
	Error   interface{}     `json:"error"`
}

type SubmitReply struct {
	Status string `json:"status"`
}

type ErrorReply struct {
	Code    int    `json:"code"`
	Message string `json:"message"`
}

// Definiere den Typ JSONStratumResult
type JSONStratumResult struct {
	Id     interface{} `json:"id"`
	Result interface{} `json:"result,omitempty"`
	Error  interface{} `json:"error,omitempty"`
}
