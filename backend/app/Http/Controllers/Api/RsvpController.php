<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Rsvp;
use Illuminate\Http\Request;

class RsvpController extends Controller
{
    public function index()
    {
        return response()->json(Rsvp::all());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama' => 'required|string|max:255',
            'kehadiran' => 'required|in:hadir,tidak,belum',
            'pesan' => 'nullable|string',
            'keterangan' => 'nullable|string|max:255',
        ]);

        $rsvp = Rsvp::create($validated);

        return response()->json([
            'message' => 'RSVP berhasil disimpan',
            'data' => $rsvp
        ], 201);
    }

    public function destroy($id)
    {
        $rsvp = Rsvp::find($id);

        if (!$rsvp) {
            return response()->json(['message' => 'RSVP tidak ditemukan'], 404);
        }

        $rsvp->delete();
        return response()->json(['message' => 'RSVP dihapus']);
    }

    public function statistics()
    {
        return response()->json([
            'total' => Rsvp::count(),
            'hadir' => Rsvp::where('kehadiran', 'hadir')->count(),
            'tidak' => Rsvp::where('kehadiran', 'tidak')->count(),
            'belum' => Rsvp::where('kehadiran', 'belum')->count(),
        ]);
    }
}
